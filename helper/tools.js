export function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.style.display = "none"
    textArea.innerHTML = text;
    return textArea.value;
  }