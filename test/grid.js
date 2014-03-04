(function() {
    var tests = {
        fullWidthTest: function() {
            var row = document.querySelector('#full-width-test > div');
            var column = document.querySelector('#full-width-test > div > div');
            assert('full-width-test', row.offsetWidth === column.offsetWidth);
        },

        equalWidthTest: function() {
            var columns = document.querySelectorAll('#equal-width-test > div > div');
            var size = undefined;
            var success = true;
            for (var i = 0; i < columns.length; ++i) {
                if (size === undefined) {
                    size = columns[i].offsetWidth;
                }
                if (columns[i].offsetWidth !== size) {
                    success = false;
                    break;
                }
            }
            assert('equal-width-test', success);
        },

        doubleWidthTest: function() {
            var firstColumn = document.querySelector('#double-width-test > div > div:nth-child(1)');
            var secondColumn = document.querySelector('#double-width-test > div > div:nth-child(2)');
            var firstWidth = (firstColumn.offsetWidth * 2) & ~(1 >>> 0);
            var secondWidth = (secondColumn.offsetWidth - 40) & ~(1 >>> 0);
            assert('double-width-test', Math.abs(firstWidth - secondWidth) <= 2);
        }
    };

    window.addEventListener('load', function() {
        for (test in tests) {
            tests[test]();
        }
    });
})();
