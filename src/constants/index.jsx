import { Armchair, HeartHandshake, Phone, Sofa } from "lucide-react";

const K = {
    NAVLINKS: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about-us"
        },
        {
            name: "Collection",
            path: "/collection"
        },
        {
            name: "Contact",
            path: "/contact-us"
        },
    ],

    SERVICES: [
        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icon: <HeartHandshake />,
            bgColor: "#F5EBEB",
            iconBg: "#CB9696",
        },
        {
            title: "Quality Furniture",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icon: <Sofa />,
            bgColor: "#DCEBDD",
            iconBg: "#8BBD8E",
        },
        {
            title: "Modern Design",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icon: <Armchair />,
            bgColor: "#F5EFD8",
            iconBg: "#D1B54A",
        },
        {
            title: "Best Support",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            Icon: <Phone />,
            bgColor: "#F4E6D8",
            iconBg: "#D29A61",
        },
    ]
};

export default K;