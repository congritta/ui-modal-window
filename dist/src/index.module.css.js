const digest = "59ce35a52efb15ce77aba1fa086e3601e503540e461600ce6ac56d76fccaff40";
const css = `._ModalWindow_1511w_1 {
  display: flex;;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, .3);
  padding: 100px 0;
  overflow: hidden;
  overscroll-behavior: none;
  backdrop-filter: blur(10px);
  transition: var(--transition-duration);
}

@media(max-width: 680px) {
  ._ModalWindow_1511w_1 {
    padding: 0
  }
}

@media(prefers-color-scheme: dark) {
  ._ModalWindow_1511w_1 {
    background: rgba(40, 40, 40, .5);
  }
}

._ModalWindow_1511w_1[class*="_isScrollable"] {
  overflow: auto;
}

._ModalWindow_1511w_1:not([class*="_isShown"]) {
  opacity: 0;
  visibility: hidden;
}

._container_1511w_38 {
  width: 100%;
  margin: auto;
  max-width: 680px;
  background: #fff;
  transition: var(--transition-duration);
}

@media(prefers-color-scheme: dark) {
  ._container_1511w_38 {
    background: #000;
  }
}

@media(max-width: 680px) {
  ._container_1511w_38 {
    margin-bottom: 0
  }
}

._container_1511w_38:not([class*="_isShown"]) {
  opacity: 0;
  visibility: hidden;
  transform: translateY(50px);
}

@media(max-width: 680px) {
  ._container_1511w_38:not([class*="_isShown"]) {
    transform: translateY(100%);
  }
}

/* Header */

._header_1511w_72 {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background: #fff;
}

@media(prefers-color-scheme: dark) {
  ._header_1511w_72 {
    background: #000;
  }
}

@media(max-width: 680px) {
  ._header_1511w_72 {
    position: sticky;
    top: 0;
  }
}

._headerTitle_1511w_93 {
  font-weight: bold;
  font-size: 14pt;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media(prefers-color-scheme: dark) {
  ._headerTitle_1511w_93 {
    color: #fff
  }
}

button._headerCloseButton_1511w_108 {
  flex-shrink: 0;
  margin-left: auto;
}

._header_1511w_72, ._contents_1511w_113 {
  padding: 20px;
}

/* Contents */

._contents_1511w_113 {
  
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();

export default {
  "ModalWindow": "_ModalWindow_1511w_1",
  "modalWindow": "_ModalWindow_1511w_1",
  "container": "_container_1511w_38",
  "header": "_header_1511w_72",
  "headerTitle": "_headerTitle_1511w_93",
  "headerCloseButton": "_headerCloseButton_1511w_108",
  "contents": "_contents_1511w_113"
};
export { css, digest };
