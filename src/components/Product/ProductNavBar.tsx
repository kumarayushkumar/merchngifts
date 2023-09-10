import { useState } from 'react'
import dropdownBtnImage from '../../assets/images/dropdown.svg'
import { IProductNavBar } from '../../interface'

export default function ProductNavBar({ productList}: IProductNavBar) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  const handleScrollToSection = (sectionId: string, index: number) => {
    const section = document.getElementById(sectionId)
    setActiveIndex(index)
    if (section !== null) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 product_left">
            <button
              className={`cat_btn ${isHidden ? 'active' : ''}`}
              onClick={() => {
                setIsHidden(!isHidden)
              }}
            >
              Categories
              <span className={`btn ${isHidden ? 'active' : ''}`}>
                <img src={dropdownBtnImage} alt="Dropdown Icon" />
              </span>
            </button>
            <ul className={`mt-2 list ${isHidden ? 'active' : ''}`}>
              {Object.keys(productList).map((productType, index) => (
                <li
                  key={productType}
                  onClick={() => handleScrollToSection(productType.replace(/\s/g, '_'), index)}
                  className={`element ${activeIndex === index ? 'active' : ''}`}
                >
                  {productType}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}