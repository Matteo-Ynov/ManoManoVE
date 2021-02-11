var margin = 50;

class Room {
    constructor(w, h, canvW, canvH) {
        this.width = w;
        this.height = h;

        this.canvW = canvW;
        this.canvH = canvH;

        this.pixRatio = w >= h * 1.25 ? w / (canvW - margin) : h / (canvH - margin);
        this.widthPix = w / this.pixRatio;
        this.heightPix = h / this.pixRatio;

        this.x = this.canvW / 2 - this.widthPix / 2;
        this.y = this.canvH / 2 - this.heightPix / 2;

        this.selection = null;

        this.furnitures = [];
    }
    draw() {
        fill(0);
        strokeWeight(1);
        text(this.width + " m", this.x + this.widthPix / 2 - 5, this.y - 6);
        text(
            this.height + " m",
            this.x + this.widthPix + 5,
            this.y + this.heightPix / 2 - 5
        );

        fill(255);
        strokeWeight(4);
        stroke(0);
        rect(this.x, this.y, this.widthPix, this.heightPix);
    }
    clearSelection() {
        this.selection = null;
        for (var i = this.furnitures.length - 1; i >= 0; i--) {
            this.furnitures[i].selected = false;
        }
    }
    resize(w, h) {
        this.width = w;
        this.height = h;

        this.pixRatio =
            w >= h * 2 ? w / (this.canvW - margin) : h / (this.canvH - margin);
        this.widthPix = w / this.pixRatio;
        this.heightPix = h / this.pixRatio;

        this.x = canvW / 2 - this.widthPix / 2;
        this.y = canvH / 2 - this.heightPix / 2;
    }
}