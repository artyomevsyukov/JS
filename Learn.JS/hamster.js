if (location.hostname === "hamsterkombatgame.io") {
    const original_indexOf = Array.prototype.indexOf;
    Array.prototype.indexOf = function (...args) {
        console.log("IndexOf called: ", this);
        if (
            JSON.stringify(this) ===
            JSON.stringify(["android", "android_x", "ios"])
        ) {
            setTimeout(() => (Array.prototype.indexOf = original_indexOf), 0);
            return 0;
        }
        return original_indexOf.apply(this, args);
    };
    alert("Hamster join");
}
// const btn = document.querySelector(".btn");

// getEventListeners($0)
// console.log(getEventListeners(btn));
// btn.dispatchEvent(new PointerEvent('pointerup'))
