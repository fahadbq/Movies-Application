import React from 'react'

const Search = (props) =>{
    const { search, orderBy, handleChange }= props

    // createing options for sorting
    const sortData = [ 'A to Z', 'Z to A', '1-100', '100-1' ]

    return (
        <div className="row col-12">
            <form className="input-group input-group-sm mb-3" aria-label="Text input with dropdown button" > 

                <input type='text' 
                    placeholder='search by movie/ranking' 
                    value={ search } 
                    onChange={ handleChange } 
                    name='search'
                    className='form-control'
                />
                
                <div className="row col-2">
                <select value={orderBy} 
                        onChange={ handleChange }
                        name='orderBy'
                        className="btn btn-secondary dropdown-toggle form-select" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                        >

                        <option value='' > order by </option>
                                        
                        { sortData.map((ele, i) =>{
                            return <option key={i} value={ele} > {ele} </option>
                        })}
                </select> 
                </div>
            </form> <br />
        </div>
    )
}

export default Search