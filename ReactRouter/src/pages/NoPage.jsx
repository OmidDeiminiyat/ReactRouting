import style from './Style.module.scss';

export function NotFound(){
    return(
        <>
            <h1 className={style.Error} >Oooops</h1>
            <h3>Page not found</h3>
        </>
    )
} 