//import Ad from '../components/Ad';
import Filter from '../components/Filter';
import { Button, TextField } from '@mui/material';
import { Ad } from '../types/types';
import { useState, useEffect } from 'react';
import AdComponent from '../components/Ad';
import { AdsQuery } from '../lib/controller';
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setFilter } from "../store/FiltersReducer";


const Ads = () => {
    const [ads, setAds] = useState<Ad[]>([]);
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);


    // query backend for ads with filters
    useEffect(() => {
        AdsQuery(
            filters.search,
            filters.category,
            filters.minPrice,
            filters.maxPrice,
            filters.zipCode
        ).then((ads) => {
            setAds(ads);
        });
    }, [filters]);



    /*     useEffect(
            () =>
                onSnapshot(adsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
                    setAds(
                        snapshot.docs.map((doc) => {
                            return {
                                id: doc.id,
                                ...doc.data(),
                            };
                        })
                    );
                }),
            []
        ); */




    return (
        <div className='w-screen flex flex-col bg-pu-grunn pt-40'>
            <div className='flex flex-row w-full lg:mx-10 xl:mx-20'>
                <div className='pt-24 hidden lg:block'>
                    <Filter/>
                </div>            
    
                <section className='flex flex-col h-auto'>
                    {/* <Title heading="Våre " span='annonser' size='text-7xl'/> */}
                    <div className='w-full flex flex-row justify-center gap-5'>
                        <div className='lg:hidden block'>
                            <Button variant="contained">Filter</Button>
                        </div>
                        <div className='h-full w-2/5 lg:w-3/5 gap-1 flex flex-row'>
                            <TextField sx={{
                                width: '1',
                            }} variant="filled" label="Ønsket produkt" value={filters.search} onChange={(event: any) => {
                                dispatch(setFilter({ field: "search", value: event.target.value }));
                            }} />
                            {/* <Button variant="contained" >Søk</Button> */}
                        </div>
                        <Button color="info" variant="contained" href="/#/adcreator">Opprett annonse</Button>
                    </div>

                    <div className='flex m-auto w-full max-w-7xl pt-10 text-current flex-wrap flex-row justify-center'>
                        {/* Not in use but can be used as testdata
                        <Ad 
                            src="https://static.bb.se/wcsstore/CAS/PIM/Luna/imgs/1151376.jpg"
                            title="Bor"
                            description="Dritbra bor som lager høl"
                            location="Fredrikstad"
                            price="200kr/dag"
                            date="07.02.23" 
                        />
                        */}
                        {ads?.map((ad) => (
                            <AdComponent key={ad.id} ad={ad} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Ads;

