import React from 'react'
import "./AddCategory.scss"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
]



const AddCategory = () => {
    return (
        <div className="ac__container">
            <div className="data">
                <div className="title">Add New Category</div>
                <button className="back">
                    <ArrowBackIosNewIcon className='back__icon' />
                    <div className="back__text">BACK TO LIST</div>
                </button>

                <div className="form">
                    <div className="upper">
                        <div className="first__field">
                            <div className="titlee">Parent</div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                // sx={{ width: 1000 }}
                                renderInput={(params) => <TextField {...params} placeholder="Please select" />}
                            />

                        </div>

                        <div className="first__field second">
                            <div className="titlee">
                                Is Published?

                            </div>
                            <div className="check"> <Checkbox /></div>

                        </div>
                        <div className="first__field">
                            <div className="titlee">Small Image (327x378-jpg)</div>
                            <label>Browse ...<input name='image2' type="file" /></label>
                        </div>
                        <div className="first__field">
                            <div className="titlee">Large Image (662x378-jpg)</div>
                            <label>Browse ...<input name='image2' type="file" /></label>
                        </div>
                        <div className="first__field">
                            <div className="titlee">Dispaly Order</div>
                            <input type="number" className="order" />
                        </div>

                    </div>
                    <div className="bottom">
                        <div className="bottom__first">
                            <div className="heading">Almanca</div>
                            <div className="first__field">
                                <div className="bottom__title">Name</div>
                                <input type="text" className="bottom__order" />
                            </div>
                        </div>
                        <div className="bottom__first">
                            <div className="heading">İngilizce</div>
                            <div className="first__field">
                                <div className="bottom__title">Name</div>
                                <input type="text" className="bottom__order" />
                            </div>
                        </div>
                        <div className="bottom__first">
                            <div className="heading">Türkçe</div>
                            <div className="first__field">
                                <div className="bottom__title">Name</div>
                                <input type="text" className="bottom__order" />
                            </div>
                        </div>

                        <div className="btns">
                            <div className="btn">
                                <button className="btn1">SAVE AND CLOSE</button>
                                <button className="btn1 btn2">SAVE</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory