var initSummernote = function(){
    $('#summernote').summernote({
        toolbar: [],
        callbacks: {
            onInit: function(e) {
                $("#summernote").summernote("fullscreen.toggle");
            }
        }
    });
 }

var undo = function() {
    $('#summernote').summernote('undo');
};

var redo = function() {
    $('#summernote').summernote('redo');
};

var disable = function() {
    $('#summernote').summernote('disable');
};

var enable = function() {
    $('#summernote').summernote('enable');
};

var bold = function() {
    $('#summernote').summernote('bold');
};

var italic = function() {
    $('#summernote').summernote('italic');
};

var underline = function() {
    $('#summernote').summernote('underline');
};

var strikethrough = function() {
    $('#summernote').summernote('strikethrough');
};

var superscript = function() {
    $('#summernote').summernote('superscript');
};

var subscript = function() {
    $('#summernote').summernote('subscript');
};

var backColor = function(color) {
    $('#summernote').summernote('backColor', color);
};

var foreColor = function(color) {
    $('#summernote').summernote('foreColor', color);
};

var fontName = function(fontName) {
    $('#summernote').summernote('fontName', fontName);
};

var fontSize = function(fontSize) {
    $('#summernote').summernote('fontSize', fontSize);
};

var justifyLeft = function() {
    $('#summernote').summernote('justifyLeft');
};

var justifyRight = function() {
    $('#summernote').summernote('justifyRight');
};

var justifyCenter = function() {
    $('#summernote').summernote('justifyCenter');
};

var justifyFull = function() {
    $('#summernote').summernote('justifyFull');
};

var insertOrderedList = function() {
    $('#summernote').summernote('insertOrderedList');
};

var insertUnorderedList = function() {
    $('#summernote').summernote('insertUnorderedList');
};

var indent = function() {
    $('#summernote').summernote('indent');
};

var outdent = function() {
    $('#summernote').summernote('outdent');
};

var formatBlock = function(tagName) {
    $('#summernote').summernote('formatBlock', tagName);
};

var formatH1 = function() {
    $('#summernote').summernote('formatH1');
};

var formatH2 = function() {
    $('#summernote').summernote('formatH2');
};

var formatH3 = function() {
    $('#summernote').summernote('formatH3');
};

var formatH4 = function() {
    $('#summernote').summernote('formatH4');
};

var formatH5 = function() {
    $('#summernote').summernote('formatH5');
};

var formatH6 = function() {
    $('#summernote').summernote('formatH6');
};

var lineHeight = function(lineHeight) {
    $('#summernote').summernote('lineHeight', lineHeight);
};

var insertImage = function(imageUrl) {
    $('#summernote').summernote('insertImage', imageUrl, null);
};

var insertText = function(text) {
    $('#summernote').summernote('insertText', text);
};

var createLink = function(linkText, linkUrl) {
    $('#summernote').summernote('createLink', {
      text: linkText,
      url: linkUrl,
      isNewWindow: false
    });
};

var unlink = function() {
    $('#summernote').summernote('unlink');
};

var insertText = function(text) {
    $('#summernote').summernote('editor.insertText', text);
};

var codeReview = function(){
    $('#summernote').summernote('codeview.toggle');
}

var insertTable = function(dim){
    $('#summernote').summernote('insertTable', dim);
}

var insertHorizontalRule = function() {
    $('#summernote').summernote('insertHorizontalRule');
}