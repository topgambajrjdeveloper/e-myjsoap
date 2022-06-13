import React from 'react'

const CategoriesTag = ({ category }) => {
    const badgeCat = () => {
        let color;
        switch (category) {
            case 'Crema':                
                color = 'rgba(255, 193, 7,1)'
                break;
            case 'Higiene':
                color = 'rgb(176, 192, 215)'
                break;
            case 'Jabón':
                color = 'rgba(13, 202, 240,1)'
                break;
            case 'Champú':
                color = 'rgba(25, 135, 84,1)'
                break;
            case 'Eco':
                color = '#6cdda8'
                break;
            default:
                color = 'rgba(13, 202, 240,1)'
        }
        return color;
    }
    return (
        <div className="badge" style={{ background: badgeCat() }}>
            <h7>{category}</h7>
        </div>
    )
}

export default CategoriesTag