import { useParams } from "react-router";
import { Header } from "../components/Header";

export function ServicesInner() {
    const { service } = useParams();

    return (
        <>
        <Header />
        <main>
            SERVICES INNER PAGE - {service}
        </main>
        </>
    );
}