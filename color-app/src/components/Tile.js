import React from 'react';

// const hex = this.state.hex.concat(color.hex);
// const rbg = this.state.hex.concat(color.rbg);

const Tile = (props) => {
    console.log((props.color.rgb).split(','))
let rgbb= props.color.rgb.split(',')
    return (
        <div>
            <div className="tile" onClick={() => { props.setCurrentColor(rgbb)}}>
            {/* <div onMouseOver=""> */}
                <div className="color" style={props.swatchStyle(props.color.rgb)} >
                    <h2>{props.color.name}</h2>
                        <h2>rgb({rgbb[0]},{rgbb[1]},{rgbb[2]})</h2>
                        </div>
                        <button onClick={() => { props.deleteColor(props.activeColor.id) }}>Delete</button>
                {/* </div> */}
            </div>
        </div>
    )
}


export default Tile;

// $(()=>{
//     const saveColor = () => {
//       // ajax call to save color
//       $.ajax({
//         url: '/',
//         type: 'POST',
//         data: {
//           // send the hex value
//           hex: $('#color-input').val()
//         },
//         // if the request is successful
//         success: (color) => {
//           console.log(color);
//           // add the color to the rendered colors
//           addColor(color.color);
//           // add the save event listener
//           // I am adding the save event listener once each time to prevent
//           // accidental multiple clicks / saves
//           addSave();
//         },
//         error: (err) => {
//           console.log(err);
//           addSave();
//         }
//       });
//     }

//     // function to add the save event listener
//     const addSave = ()=> {
//       $('#save-color').one('click', ()=>{
//         saveColor();
//       });
//     }
//     // invoke it when the document loads
//     addSave();

//     const deleteColor = (id) => {
//       // ajax call to delete a color
//       $.ajax({
//         url: `/${id}`,
//         type: 'DELETE',
//         // if the request is successful
//         success: (data) => {
//           // remove the color from the list
//           $(`.color-container[data-id=${id}]`).remove();
//         },
//         error: (err) => {
//           console.log(err);
//         }
//       })
//     }

//     const updateColor = (id, hex) => {
//       // ajax call to update a color
//       $.ajax({
//         url: `/${id}`,
//         type: 'PUT',
//         // send the new hex value
//         data: {
//           hex: hex
//         },
//         // if the request is successful
//         success: (data) => {
//           // update the render of the saved color
//           renderUpdate(data.color);
//         },
//         error: err => {
//           console.log(err);
//         }
//       })
//     }

//     // function that updates the render of a saved color
//     const renderUpdate = (color) => {
//       // get the container of the color
//       const $colorContainer = $(`.color-container[data-id=${color.id}]`);
//       // remove all of the p tags with the color info in them
//       $(`.color-container[data-id=${color.id}]>p`).remove();

//       // re-append p tags with the new color info in them
//       // there are 4 values I want to display from the color object
//       // looping through an array of each of them
//       ['hex', 'rgb', 'hsl', 'cmyk'].forEach(prop => {
//         const $p = $('<p>')
//           .text(`${prop}: ${color[prop]}`)
//           .appendTo($colorContainer);
//       });
//     }

//     // function to add a color to the list
//     const addColor = (color)=>{
//       // get the container of saved colors
//       const $saved = $('#saved-colors');
//       console.log(color);
//       // create a container for this color
//       const $colorContainer = $('<div>', {
//         class: 'color-container',
//         "data-id": color.id
//       }).prependTo($saved); // add it to the start of all the colors

//       // I need to use vanilla js to add the jscolor package to make
//       // the color picker work
//       let $color = document.createElement('INPUT');
//       const picker = new jscolor($color).fromString(color.hex);

//       // now I want to use jquery to do the rest
//       $color = $($color)
//         .addClass('color-swatch')
//         .css({'background-color': color.hex, color: color.hex})
//         .val(color.hex.substr(1))
//         // when the value of the color picker changes
//         .change(e => {
//           // do a request to the server to update the color
//           updateColor(color.id, $(e.target).val());
//         })
//         .appendTo($colorContainer);

//       // append p tags with the new color info in them
//       // there are 4 values I want to display from the color object
//       // looping through an array of each of them
//       ['hex', 'rgb', 'hsl', 'cmyk'].forEach(prop => {
//         const $p = $('<p>')
//           .text(`${prop}: ${color[prop]}`)
//           .appendTo($colorContainer);
//       });

//       // add a delete button
//       const $del = $('<div>', {
//         class: 'delete-color',
//       }).click((e)=>{ // when it is clicked
//         // do request to delete the color
//         deleteColor(color.id);
//       }).appendTo($colorContainer);
//     }

//     // when one of the color swatches changes
//     $('.color-swatch').change(e => {
//       // get the element
//       const $swatch = $(e.target);
//       // get the id from the parent element
//       const id = $swatch.parent().attr('data-id');
//       // get the color value
//       const hex = $swatch.val();
//       // make a request to update the color
//       updateColor(id, hex);
//     })

//     // when a delete color button is clicked
//     $('.delete-color').click((e)=>{
//       // get the id of the color being deleted
//       const id = $(e.target).parent().attr('data-id');
//       // delete the color
//       deleteColor(id);
//     });

//     $('#refresh').click((e)=>{
//       e.stopPropagation();
//       console.log('random');
//       const random = randomColor();
//       $('.color-input')
//         .css({'background-color': `#${random}`, color: `#${random}`})
//         .val(random);
//     })

//     function randomColor(){
//       const hexValues = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
//       const color = [''];

//       for(let i = 0; i<6; i++){
//         const randomIndex = Math.floor(Math.random() * hexValues.length);
//         const randomChar = hexValues[randomIndex];
//         color.push(randomChar);
//       }

//       return color.join('');
//     }

//   });


