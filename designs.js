// it enables JS to connect with the existing HTML
const table = document.getElementById('pixelCanvas')
const  form = document.getElementById('sizePicker')

// it listens for a submit button on the form
// then uses the information to make a grid or table
form.addEventListener('submit', gridMaking)

// it listens for a click on the created table 
// then calls a change color function
table.addEventListener('click', changeColor)


// this function creats a table with height and width
function makeGrid(row, colum){
    //this is synonymous to removeChild function 
    // rendering the table Element Empty
    // so as to prevent adding more tables
    table.innerHTML = "";

    for (let i = 0; i < row; i++){
        // this creates a table row element
        const tableRow = document.createElement('tr')
        for (let j = 0; j < colum; j++){
            // creates a table data element
            const tableData = document.createElement('td')
            // this appends td to tr
            tableRow.appendChild(tableData)
        }
        // this appends tr to the existing table
        table.appendChild(tableRow)
    }
}

// the fucntion called by the event listener
function gridMaking(event){
    event.preventDefault()
    const height = document.getElementById('inputHeight').value
    const width = document.getElementById('inputWidth').value

    // makeGrid accepts height and width parameters to replace rows and columns
    makeGrid(height, width)
}


// this changes the background color of a target td to the colorPicker's color
function changeColor(event){
    event.preventDefault()
    const color = document.getElementById('colorPicker').value
    event.target.style.backgroundColor = color

}
