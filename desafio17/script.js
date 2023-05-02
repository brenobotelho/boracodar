const prevBtn = document.querySelector('.prev')
const title = document.querySelector('.title')
const nextBtn = document.querySelector('.next')

const addEventBtn = document.querySelector('.add-event-btn')
const background = document.querySelector('.background')

document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar')
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: false,
        titleFormat: { 
            year: 'numeric', 
            month: 'long'
        },
        
        height: 'auto',
        selectable: true,
        eventBackgroundColor: '#6200EE',
        dayMaxEventRows: 2,
        editable: true,
        eventStartEditable: true,
        eventResizableFromStart: true,

        events: [
            {
              title  : 'Focar nos estudos',
              start  : '2023-04-03',
              end    : '2023-04-08'
            }
        ]
    })

    calendar.render()
    calendar.setOption('locale', 'pt-br')

    title.innerHTML = calendar.currentData.viewTitle

    today(calendar)
    prevMonth(calendar)
    nextMonth(calendar)

    formatDaysOfWeek()
    showAddEventWrapper()

    function addEvent(title, start, end) {
        calendar.addEvent({
            title: title,
            start: start,
            end: end || null
        })
    }

    addEventBtn.addEventListener('click', () => {
        const titleInput = document.querySelector('#event-name');
        const startInput = document.querySelector('#start-date');
        const endInput = document.querySelector('#end-date')

        const end = new Date(endInput.value)
        end.setDate(end.getDate() + 1)

        if(titleInput.value == '') {
            alert('Por favor, digite o nome do evento')
            return
        }

        addEvent(titleInput.value, startInput.value, end)

        titleInput.value = ''
        startInput.value = ''
        endInput.value = ''

        background.style.display = 'none'
    })
})

const closeBtn = document.querySelector('.close-btn')
closeBtn.addEventListener('click', hideAddEventWrapper)

function hideAddEventWrapper() {
    background.classList.add('disappear')

    setTimeout(() => {
        background.style.display = 'none'
        background.classList.remove('disappear')
    }, 300)
}

function showAddEventWrapper() {
    const showAddEventWrapperBtn = document.querySelector('.show-add-event-wrapper')

    showAddEventWrapperBtn.addEventListener('click', () => {
        const background = document.querySelector('.background')
        background.style.display = 'initial'
    })
}

function today(calendar) {
    const today = document.querySelector('.today')
    today.addEventListener('click', () => {
        calendar.today()
        title.innerHTML = calendar.currentData.viewTitle
    })
}

function nextMonth(calendar) {
    nextBtn.addEventListener('click', () => {
        calendar.next()
        title.innerHTML = calendar.currentData.viewTitle
    })
}

function prevMonth(calendar) {
    prevBtn.addEventListener('click', () => {
        calendar.prev()
        title.innerHTML = calendar.currentData.viewTitle
    })
}

function formatDaysOfWeek() {
    const days = document.querySelectorAll('.fc .fc-col-header-cell-cushion')
    days.forEach(day => {
        day.textContent = day.textContent.replace(/\./g, '')
        day.textContent = day.textContent.charAt(0).toUpperCase() + day.textContent.slice(1)
    })
}