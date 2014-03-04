function assert(test, condition) {
    var element = document.getElementById(test);
    if (condition) {
        element.classList.add('test-success');
    } else {
        element.classList.add('test-fail');
    }
}
