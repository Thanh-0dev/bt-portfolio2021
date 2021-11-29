export default class {
  constructor(_options) {
    this.$element = _options.$element;
    this.$dummy = this.$element.querySelector(".js-dummy");
    this.$container = this.$element.querySelector(".js-container");
    this.$mover = this.$container.querySelector(".js-mover");
    this.$groups = this.$mover.querySelectorAll(".js-group");
    this.$links = this.$mover.querySelectorAll("a");

    this.time = app.time;
    this.sizes = app.sizes;

    this.setMeasures();
    this.setIllustrationsToLoad();
    this.setDrag();
    this.setLinks();
    this.setSiblings();

    this.time.on("tick.projectsSlider", () => {
      this.update();
    });
  }

  setMeasures() {
    this.measures = {};
    this.measures.contentWidth = 100;
    this.measures.containerWidth = 100;
    this.measures.groupWidth = 100;
    this.measures.margin = 100;

    this.measures.update = () => {
      this.measures.contentWidth = this.$mover.offsetWidth;
      this.measures.containerWidth = this.$container.offsetWidth;
      this.measures.groupWidth = this.$groups[0].offsetWidth;
      this.measures.margin = this.$dummy.offsetLeft;
    };

    this.sizes.on("resize.projectsSlider", this.measures.update);
    this.measures.update();
  }

  setIllustrationsToLoad() {
    const $illustrations = [...this.$mover.querySelectorAll(".js-to-load")];

    for (const _$illustration of $illustrations) {
      const $image = _$illustration.querySelector("img");
      if ($image.complete) {
        _$illustration.classList.add("is-loaded");
      } else {
        const load = () => {
          _$illustration.classList.add("is-loaded");
          $image.removeEventListener("load", load);
        };
        $image.addEventListener("load", load);
      }
    }
  }

  setDrag() {
    this.drag = {};
    this.drag.active = false;
    this.drag.moved = false;
    this.drag.speed = 0;
    this.drag.value = 0;
    this.drag.rounded = 0;
    this.drag.initial = 0;
    this.drag.final = 0;

    this.drag.cursor = {};
    this.drag.cursor.previous = 0;
    this.drag.cursor.current = 0;
    this.drag.cursor.delta = 0;

    /**
     * Methods
     */
    this.drag.start = (_x) => {
      this.drag.active = true;
      this.drag.moved = false;
      this.drag.initial = this.drag.value;

      this.drag.cursor.previous = _x;
      this.drag.cursor.current = _x;
      this.drag.cursor.delta = 0;

      this.$container.classList.add("is-grabbing");
    };

    this.drag.move = (_x) => {
      this.drag.cursor.previous = this.drag.cursor.current;
      this.drag.cursor.current = _x;
      this.drag.cursor.delta +=
        this.drag.cursor.current - this.drag.cursor.previous;
    };

    this.drag.end = (_x) => {
      this.drag.active = false;

      this.$container.classList.remove("is-grabbing");
    };

    /**
     * Mouse events
     */
    this.drag.mouseMove = (_event) => {
      this.drag.move(_event.clientX);
    };

    this.drag.mouseUp = (_event) => {
      this.drag.end();

      document.removeEventListener("mousemove", this.drag.mouseMove);
      document.removeEventListener("mouseup", this.drag.mouseUp);
    };

    this.drag.mouseDown = (_event) => {
      _event.preventDefault();

      this.drag.start(_event.clientX);

      document.addEventListener("mousemove", this.drag.mouseMove);
      document.addEventListener("mouseup", this.drag.mouseUp);
    };

    this.$container.addEventListener("mousedown", this.drag.mouseDown);

    /**
     * Touch events
     */
    this.drag.touchMove = (_event) => {
      this.drag.move(_event.touches[0].clientX);
    };

    this.drag.touchEnd = (_event) => {
      this.drag.end();

      document.removeEventListener("touchmove", this.drag.touchMove);
      document.removeEventListener("touchend", this.drag.touchEnd);
    };

    this.drag.touchStart = (_event) => {
      // _event.preventDefault()

      this.drag.start(_event.touches[0].clientX);

      document.addEventListener("touchmove", this.drag.touchMove);
      document.addEventListener("touchend", this.drag.touchEnd);
    };

    this.$container.addEventListener("touchstart", this.drag.touchStart);
  }

  setLinks() {
    for (const _$link of this.$links) {
      _$link.addEventListener("click", (_event) => {
        if (this.drag.moved) {
          _event.preventDefault();
        }
      });
      _$link.addEventListener("contextmenu", (_event) => {
        _event.preventDefault();
      });
    }
  }

  setSiblings() {
    this.siblings = {};
    this.siblings.$container = this.$element.querySelector(".js-siblings");
    this.siblings.$previous =
      this.siblings.$container.querySelector(".js-previous");
    this.siblings.$next = this.siblings.$container.querySelector(".js-next");

    this.siblings.$previous.addEventListener("click", () => {
      this.drag.speed += 50;
    });
    this.siblings.$next.addEventListener("click", () => {
      this.drag.speed -= 50;
    });
  }

  update() {
    const oldValue = this.drag.value;

    // Dragging
    if (this.drag.active) {
      // Apply cursor delta
      this.drag.value += this.drag.cursor.delta;
      this.drag.cursor.delta = 0;

      if (
        !this.drag.moved &&
        Math.abs(this.drag.value - this.drag.initial) > 30
      ) {
        this.drag.moved = true;
      }
    }

    // Not dragging
    else {
      // Apply speed
      this.drag.speed *= 0.92;
      this.drag.value += this.drag.speed;
    }

    // Calculate speed
    this.drag.speed = this.drag.value - oldValue;

    // // Apply limits
    // const leftLimit = this.measures.margin
    // const rightLimit = - (this.measures.contentWidth - this.measures.containerWidth + this.measures.margin)

    // if(this.drag.value > leftLimit)
    // {
    //     this.drag.speed += (leftLimit - this.drag.value) * 0.001 * this.time.delta
    // }
    // else if(this.drag.value < rightLimit)
    // {
    //     this.drag.speed += (rightLimit - this.drag.value) * 0.001 * this.time.delta
    // }

    // Round value and update if changed
    const rounded = Math.round(this.drag.value * 10) / 10;

    if (rounded !== this.drag.rounded) {
      this.drag.rounded = rounded;

      // Infinite groups
      this.drag.final =
        (this.drag.rounded % this.measures.groupWidth) -
        this.measures.groupWidth;
      this.$mover.style.transform = `translateX(${this.drag.final}px)`;
    }
  }

  destroy() {
    this.time.off("tick.projectsSlider");
    this.sizes.off("resize.projectsSlider");
  }
}
