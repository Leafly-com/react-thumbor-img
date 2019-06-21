import { thumborURL } from './urlgenerator'

function generateSrcSet(props) {
	let srcSet = [];

	if (props.srcSet && props.srcSet.length > 0) {
		// use the srcSet prop to generate the source set
		srcSet = props.srcSet.map(image => {
			const { src, width, height } = image;
			const input = Object.assign({}, props, { src, width, height });

			return `${thumborURL(input)} ${width}w`
		});
	} else {
		// generate a default source set
		for (let i = 2; i <= 3; i++) {
			const input = Object.assign(
				{},
				props,
				{
					height: props.height * i,
					width: props.width * i
				}
			)
			srcSet.push(`${thumborURL(input)} ${i}x`)
		}
	}

	// Source set URLs needs to be separated by a comma and an optional space
	return srcSet.join(', ')
}

export { generateSrcSet }
