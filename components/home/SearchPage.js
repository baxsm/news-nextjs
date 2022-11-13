import React, { useState } from 'react'
import Heading from '../common/Heading'
import SearchResult from './SearchResult'

export default function SearchPage() {

    const styles = {
        container: 'flex justify-center flex-col place-items-center',
        resultContainer: 'p-2',
        searchContainer: 'w-[50%] grid place-items-center p-2 relative',
        searchInput: 'bg-[transparent] w-full outline-none border-b-2 border-b-[#fff] p-2',
        searchIcon: 'absolute bottom-6 right-4 cursor-pointer'
    }

    const [value, setValue] = useState('')
    const [submit, setSubmit] = useState(false)

    const handleInput = (val) => {
        setValue(val)
        setSubmit(false)
    }

    const handleSubmit = () => {
        setSubmit(true)
    }

    return (
        <div className={styles.container}>
            <Heading title='Search Articles' subtitle='Search News Keywords' />
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    value={value}
                    onChange={e => handleInput(e.target.value)}
                    className={styles.searchInput}
                    placeholder="Search any Keywords (e.g. Apple, Trump etc)"
                />
                <div className={styles.searchIcon} onClick={() => { handleSubmit() }}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            {
                submit ? (
                    <div className={styles.resultContainer}>
                        <SearchResult value={value}/>
                    </div>
                ) : <></>
            }
        </div>
    )
}
