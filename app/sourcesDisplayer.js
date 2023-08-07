import './sources.css'
export function Sources(props) {
    return (
        <div className='opensList'>
            <div key={props.id} className='opensCards'>
                <div className='opens__contents'>
                    <h3 className='opensNames'>{props.name}</h3>
                    <div className='displayStack_1'>
                    <div className='opensUnis'>{props.uni}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}