import React from 'react'
import { categoriesData } from './categoriesData'
import Category from './Category'

const Categories = () => {
    const categories = categoriesData.map(category => {
        return (
            <Category
                key={category.name}
                photoUrl={category.photoUrl}
                heading={category.name}
                description={category.description} />
        )
    })
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
        }}>
            {categories}
        </div>
    )
}

export default Categories