import './SidebarNav.css';
import new_folder from '@se/icons/svg/new_folder.svg'
import action_download_stroke from '@se/icons/svg/action_download_stroke.svg'
import electricity_polarity_positive_plus from '@se/icons/svg/electricity_polarity_positive_plus.svg'
import action_filter from '@se/icons/svg/action_filter.svg'
import action_search_stroke from '@se/icons/svg/action_search_stroke.svg'
import more from '@se/icons/svg/more.svg'



const SidebarNav = () => {
    return <div className="sidebarNav">
        
        <div className="nav-left">
            <img src={new_folder} width='26px' height='26px' />
            <img src={action_download_stroke} width='26px' height='26px' />
            <img src={more} width='26px' height='26px' />
            <img src={electricity_polarity_positive_plus} width='26px' height='26px' />


        </div>
        <div className="nav-right">
        <img src={action_filter} width='26px' height='26px' />
        <img src={action_search_stroke} width='26px' height='26px' />

          
        </div>
        
    </div>
}

export default SidebarNav; 