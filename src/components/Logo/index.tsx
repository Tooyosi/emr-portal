export default function Logo(props: any) {
    let { style, logoType, ...otherProps } = props
    return <img loading='lazy' alt="logo"
        src={require(`../../assets/images/svg/Logo.svg`).default}
        style={style}
        {...otherProps} />
}
