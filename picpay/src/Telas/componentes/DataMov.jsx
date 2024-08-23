
import './DataMov.css';

function DataMov({data, children}) {
    return (
        <>
            <div className='data'>
                <h3>{data}</h3>
                {children}
            </div>

        </>
    );
}

export default DataMov;
