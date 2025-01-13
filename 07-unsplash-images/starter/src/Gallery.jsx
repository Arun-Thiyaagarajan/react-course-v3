import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGobalContext } from "./context";

const url = 'https://api.unsplash.com/search/photos?client_id=BcEBCer4SXddOqekZfm12URhV_kGaXok4PdY1XX1Yrw';

const Gallery = () => {
    const { searchTerm } = useGobalContext();

    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const result = await axios(`${url}&query=${searchTerm}`);
            return result.data;
        }
    });
    if (response.isLoading) {
        return <section className="image-container">
            <h4>Loading...</h4>
        </section>;
    }
    if (response.isError) {
        return <section className="image-container">
            <h4>There was an error...</h4>
        </section>;
    }
    
    const results = response.data.results;
    if (results.length < 1) {
        return (
            <section className="image-container">
                <h4>No results found</h4>
            </section>
        );
    }

    return (
        <section className="image-container">
            {results.map(item => {
                const url = item?.urls?.regular;
                return <img src={url} className="img" key={item.id} alt={item.alt_description} />;
            })}
        </section>
    );
}

export default Gallery;