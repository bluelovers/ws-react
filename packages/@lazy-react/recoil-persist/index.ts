import _recoilPersist, { IRecoilPersistConfig } from 'recoil-persist2';

export type { IRecoilPersistConfig };

export function recoilPersist(...argv: Parameters<typeof _recoilPersist>): ReturnType<typeof _recoilPersist>
{
	if (typeof window !== 'undefined')
	{
		return _recoilPersist(...argv)
	}

	return {
		RecoilPersist(): null
		{
			return null
		},
		updateState(): void
		{

		},
	}
}

export default recoilPersist
