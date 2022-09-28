;(function () {
	Vue.component('my-calendar', {
		data: function () {
			return {
				plugins: [
					window.FullCalendarDayGrid.default,
					window.FullCalendarTimeGrid.default,
					window.FullCalendarInteraction.default
				]
			}
		},
		template: `
         <FullCalendar
           v-bind="$attrs"
           :plugins="plugins"
           @dateClick="(clickInfo) => $emit('date-click', clickInfo)"
           @select="(selectInfo) => $emit('select', selectInfo)"
           @eventClick="(event) => $emit('event-click', event)"
           @eventSet="(event) => $emit('event-set', event)"
           @eventAdd="(event) => $emit('event-add', event)"
           @eventChange="(event) => $emit('event-change', event)"
           @eventRemove="(event) => $emit('event-remove', event)"
         >
         </FullCalendar>
       `
	})
})()
