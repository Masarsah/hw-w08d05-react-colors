// import React from "react";

// const Color = props => {
//     console.log(props)

//     return (
//         <div>

//             <div className="container" style={{backgroundColor: `rgb(${props.activeColor.rgb})`}}>
//                 <div className="colorss" 
               
//                 >
//                     <div >
//                         <button onClick={() => { props.toggleModal() }}>Edit</button>
//                         <button onClick={() => { props.deleteColor(props.activeColor.id) }}>Delete</button>
//                     </div>
//                 </div>
//                 <div className="det">
//                     <div>
//                         <h2>{props.activeColor.name}</h2>
//                         <div>
//                             <label>{props.color}</label>
//                             <input type="range"
//                                 value={props.activeColor.rgb}
//                                 max='255'
//                                 min='0'
//                                 onChange={(event) => {
//                                     props.updateColor(props[0].activeColor.rgb[0                     ], event.target.value)
//                                 }} />
//                             <input type="range"
//                                 value={props.value}
//                                 max='255'
//                                 min='0'
//                                 onChange={(event) => {
//                                     props.updateColor(props[0], event.target.value)
//                                 }} />

//                             <input color='red'
//                                 type="range"
//                                 max='255'
//                                 min='0' value={[0]}
//                             />
//                             {/* <ColorInput color='green' value={this.state.green}
//                                 updateColor={this.updateColor.bind(this)} />
//                             <ColorInput color='blue' value={this.state.blue}
//                                 updateColor={this.updateColor.bind(this)} /> */}

//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Color;