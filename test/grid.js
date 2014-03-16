(function() {
    Array.prototype.pluck = function(key) {
        return this.map(function(element) { return element[key]; });
    }

    Array.prototype.allEqual = function() {
        var value = undefined;
        var result = true;
        for (var i = 0; i < this.length; ++i) {
            if (i === 0) {
                value = this[i];
            }
            result = result && value === this[i];
        }
        return result;
    }

    var tests = {
        fullWidthTest: function() {
            var row = document.querySelector('#full-width-test > div');
            var column = document.querySelector('#full-width-test > div > div');
            assert('full-width-test', row.offsetWidth === column.offsetWidth);
        },

        equalWidthTest: function() {
            var columns = document.querySelectorAll('#equal-width-test > div > div');
            var success = [].slice.call(columns).pluck('offsetWidth').allEqual();
            assert('equal-width-test', success);
        },

        doubleWidthTest: function() {
            var firstColumn = document.querySelector('#double-width-test > div > div:nth-child(1)');
            var secondColumn = document.querySelector('#double-width-test > div > div:nth-child(2)');
            var first = firstColumn.offsetWidth * 2;
            var second = secondColumn.offsetWidth - 40;
            assert('double-width-test', Math.abs(first - second) <= 2);
        }
    };

    window.addEventListener('load', function() {
        for (test in tests) {
            tests[test]();
        }
    });
})();
