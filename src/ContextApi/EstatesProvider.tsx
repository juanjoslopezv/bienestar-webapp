import React, { useState } from 'react'
import { api } from '../utils/api';
import qs from 'qs';
import { StrapiData, StrapiEntity } from '../utils/strapi.type';
import { EstatesType } from './EstatesProvider.type';


const EstatesContext = React.createContext<{
  Estates?: StrapiData<EstatesType>,
  getEstates: () => Promise<StrapiData<EstatesType> | undefined>,
  SelectedEstate: StrapiEntity<EstatesType> | undefined,
  setSelectedEstate: React.Dispatch<React.SetStateAction<StrapiEntity<EstatesType> | undefined>>
}>({
  Estates: undefined,
  getEstates: (): Promise<StrapiData<EstatesType> | undefined> => new Promise((resolve, reject) => { }),
  SelectedEstate: undefined,
  setSelectedEstate: (a: React.SetStateAction<StrapiEntity<EstatesType> | undefined>) => {},
});

const EstatesProvider = ({ children }: { children: JSX.Element }) => {

  const [Estates, setEstates] = useState<StrapiData<EstatesType> | undefined>(undefined)
  const [SelectedEstate, setSelectedEstate] = useState<StrapiEntity<EstatesType> | undefined>();
  const getEstates = async (): Promise<StrapiData<EstatesType> | undefined> => {

    const query = qs.stringify({
      populate: ['cover', 'photos'] 
    }, {
      encodeValuesOnly: true,
    });

    try {
      const { data: response }: { data: StrapiData<EstatesType> } = await api.get(`/api/realestates?${query}`)
      setEstates(response);
      return response
    } catch (e: any) {
      return undefined
    }
  }

  return (
    <EstatesContext.Provider value={{
      Estates,
      getEstates,
      SelectedEstate,
      setSelectedEstate
    }}>
      {children}
    </EstatesContext.Provider>
  )
}

export {
  EstatesContext,
  EstatesProvider
}