import './index.css'
export function Opens(props) {
    return (
        <div className='opensList'>
            <div key={props.id} className='opensCard'>
                <img src={props.image} alt='opens-img' className='opensImage'></img>
                <div className='opens__content'>
                    <h3 className='opensName'>{props.name}</h3>
                    <div className='displayStack_1'>
                    <div className='opensUni'>{props.uni}</div>
                        <div classNmae='opensDate'>{props.description}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}