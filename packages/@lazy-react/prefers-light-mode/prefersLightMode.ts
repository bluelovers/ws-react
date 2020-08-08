import useMediaQuery from '@material-ui/core/useMediaQuery';

export function prefersLightMode(): boolean
{
	try
	{
		return useMediaQuery('(prefers-color-scheme: light)');
	}
	catch (e)
	{

	}
}

export default prefersLightMode
