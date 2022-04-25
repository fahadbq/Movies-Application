import React from 'react'

const Search = (props) =>{
    const { search, orderBy, handleChange }= props

    // createing options for sorting
    const sortData = [ 'A to Z', 'Z to A', '1-100', '100-1' ]

    return (
        <div>
            <form> 
                
                <input type='text' 
                    placeholder='search by movie/ranking' 
                    value={ search } 
                    onChange={ handleChange } 
                    name='search'
                />

                <select value={orderBy} 
                        onChange={ handleChange }
                        name='orderBy'
                        >

                        <option value='' > order by </option>
                                        
                        { sortData.map((ele, i) =>{
                            return <option key={i} value={ele} > {ele} </option>
                        })}
                </select> 
            </form> <br />
        </div>
    )
}

export default Search