import { useParams } from "react-router";

export function ServiceInner() {
    const { service } = useParams();

    return (
        <main>
            SERVICES INNER PAGE - {service}
        </main>
    );
}