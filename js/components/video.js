export default class Video {
    constructor(parentID, src, width, height, type) {
        this.parentID = parentID;
        this.src = src;
        this.width = width;
        this.height = height;
        this.type = type;
    }

    render() {
        let myParent = document.getElementById(this.parentID);
        let pos=this.src.lastIndexOf(".");
        let type=this.src.substr(pos+1);

        //
        const videoTag = `<div><video controls width=${this.width} height=${this.height}>        
        <source src=${this.src} type="video/${type}">
        
        </video></div>`;
        const myVideo = myParent.innerHTML + videoTag

        myParent.innerHTML = myVideo; 
    }
}