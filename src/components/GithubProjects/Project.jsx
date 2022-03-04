import "./project.css"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const Project = () => {
  return (
    <div className="project">
        <div className="project-wrap">
          <div className="project-title">
            <h1>Projects</h1>
          </div>
        </div>
        <div className="projectone-wrap">
          <div className="projectone">
          <CurrencyExchangeIcon className="Icon"/>
            <a href="https://github.com/mohamedmarie/currency-convertor.git" className="projectone-link">Currency Convertor</a>
          </div>
        </div>
    </div>
  )
}

export default Project