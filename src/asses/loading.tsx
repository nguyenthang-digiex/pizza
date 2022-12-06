type Props = {
    className?: any
}
function Loading(props: Props) {
    const {className} = props
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg"
             width="200px" height="200px" viewBox="0 0 100 100"
             preserveAspectRatio="xMidYMid">
            <g transform="translate(20 50)">
                <circle cx="0" cy="0" r="6" fill="#e15b64">
                    <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline"
                                      keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s"
                                      repeatCount="indefinite"></animateTransform>
                </circle>
            </g>
            <g transform="translate(40 50)">
                <circle cx="0" cy="0" r="6" fill="#f8b26a">
                    <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline"
                                      keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s"
                                      repeatCount="indefinite"></animateTransform>
                </circle>
            </g>
            <g transform="translate(60 50)">
                <circle cx="0" cy="0" r="6" fill="#abbd81">
                    <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline"
                                      keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s"
                                      repeatCount="indefinite"></animateTransform>
                </circle>
            </g>
            <g transform="translate(80 50)">
                <circle cx="0" cy="0" r="6" fill="#81a3bd">
                    <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline"
                                      keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s"
                                      repeatCount="indefinite"></animateTransform>
                </circle>
            </g>
        </svg>
    )
}

export default Loading