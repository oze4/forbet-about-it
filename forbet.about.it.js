const bodyClassesToRemove = ["adblock-on", "body--no-scroll"];
bodyClassesToRemove.forEach(bodyClass => {
    if (document.body.classList.contains(bodyClass)) {
        document.body.classList.remove(bodyClass);
    }
});

const overlaySelector = 'div.fbs-auth__container.fbs-auth__adblock';
const overlayElements = document.querySelectorAll(overlaySelector);
overlayElements.forEach(el => el.remove());