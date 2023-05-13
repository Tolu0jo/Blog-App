import "./Write.css"

const Write = () => {
  return (
    <div className="Write">
       <form action="" className="write">
        <div className="writeForm">
            <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
           
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea 
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText" 
         >
            </textarea>
            <button className="writeSubmit">Publish</button>
        </div>
       </form>
    </div>
  )
}

export default Write