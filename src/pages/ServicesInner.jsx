import { useParams } from "react-router";

export function ServicesInner() {
    const { service } = useParams();

    return (
        <main>
            SERVICES INNER PAGE - {service}
        </main>
    );
}