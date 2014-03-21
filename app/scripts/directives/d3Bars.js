'use strict';

//removed d3Service Service DI
app.directive('d3Bars', function() {
	return {
		/* restrict directive to element names only */
		restrict: 'E',
		scope: {
			// isolate so we can reuse directive with different data.
			data: '=' // bi-directional data-binding
		},
		/* Directives that want to modify the DOM typically use the link option 
		 *	- scope is an Angular scope object.
		 *	- element is the jqLite-wrapped element that this directive matches.
		 *	- attrs is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
		 */
		link: function(scope, element, attrs) {
			/* d3Service.d3().then(function(d3) {*/
			// define constants and helpers used for the directive
			var margin = parseInt(attrs.margin) || 20,
				barHeight = parseInt(attrs.barHeight) || 20,
				barPadding = parseInt(attrs.barPadding) || 5;

			// our d3 code will go here
			var svg = d3.select(element[0])
				.append('svg')
				.style('width', '100%');

			//Browser onresize event
			window.onresize = function() {
				scope.$apply();
			};

			// Watch for resize event
			scope.$watch(function() {
				return angular.element(window)[0].innerWidth;
			}, function() {
				scope.render(scope.data);
			});

			scope.render = function(data) {
				// remove all previous items before render
				svg.selectAll('*').remove();

				// If we don't pass any data, return out of the element
				if (!data) {
					return;
				}

				// setup variables
				var width = d3.select(element[0]).node().offsetWidth - margin,
					// calculate the height
					height = scope.data.length * (barHeight + barPadding),
					// Use the category20() scale function for multicolor support
					color = d3.scale.category20(),
					// our xScale
					xScale = d3.scale.linear()
						.domain([0, d3.max(data, function(d) {
							return d.count;
						})])
						.range([0, width]);

				// set the height based on the calculations above
				svg.attr('height', height);

				//create the rectangles for the bar chart
				svg.selectAll('rect')
					.data(data).enter()
					.append('rect')
					.attr('height', barHeight)
					.attr('width', 140)
					.attr('x', Math.round(margin / 2))
					.attr('y', function(d, i) {
						return i * (barHeight + barPadding);
					})
					.attr('fill', function(d) {
						return color(d.count);
					})
					.transition()
					.duration(1000)
					.attr('width', function(d) {
						return xScale(d.count);
					}); // end selectAll function
			}; // end render function

			// watch for data changes and re-render
			scope.$watch('data', function(newVals, oldVals) {
				return scope.render(newVals);
			}, true);
			//}); end d3Service promise
		} // end link function
	}; // end directive return 
});