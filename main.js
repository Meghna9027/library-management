// Our data we will use:

const products = [
    {
        "id": "1",
        "image": "/product_img/bald eagle.webp",
        "short_description": "The Bald Eagle: The Improbable Journey Of America's Bird",
        "cost": "677.32",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "2",
        "image": "/product_img/against all odd.jpg",
        "cost": "3474.41",
        "short_description": "Against All Odds: A True Story Of Ultimate Courage and Survival In World War 2",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "3",
        "image": "/product_img/we dont know ourselves.webp",
        "cost": "2878.07",
        "short_description": "We Don't Know Ourselves: A Personal History Of Modern Island",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "4",
        "image": "/product_img/roman empire.webp",
        "cost": "4379.01",
        "short_description": "The War That Made The Roman Empire: Antony, Cleopatra, and Octavian at Actium",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "5",
        "image": "/product_img/the jesuits.jpg",
        "cost": "3274.66",
        "short_description": "The Jesuits: A History",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "6",
        "image": "/product_img/end of days.jpg",
        "cost": "758.8",
        "short_description": "End Of Days: A Pike Logan Novel (A Pike Logan Thriller Book 16) ",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "7",
        "image": "/product_img/billy summers.jpg",
        "cost": "2691.62",
        "short_description": "Billy Summers",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/harry potter.jpg",
        "cost": "4801.29",
        "short_description": "Harry Potter: The Complete Collection",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/the ice maiden.jpg",
        "cost": "4801.29",
        "short_description": "The Ice Maiden (Doug Bateman Mystery Book 1)",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/mercy.jpg",
        "cost": "4801.29",
        "short_description": "Mercy (Atlee Pine Book 4)",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/meluha.jpg",
        "cost": "4801.29",
        "short_description": "The Immortals Of Meluha",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/nagas.jpg",
        "cost": "4801.29",
        "short_description": "The Secret Of The Nagas",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/scion.jpg",
        "cost": "4801.29",
        "short_description": "Scion Of Ikshvaku",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/oath.jpg",
        "cost": "4801.29",
        "short_description": "The Oath Of The Vayuputras",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/sita.jpg",
        "cost": "4801.29",
        "short_description": "Sita: Warrior Of Mithila",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/life.jpg",
        "cost": "4801.29",
        "short_description": "Life 3.0",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/elon musk.jpg",
        "cost": "4801.29",
        "short_description": "Elon Musk",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/steve jobs.jpg",
        "cost": "4801.29",
        "short_description": "Steve Jobs",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/innovators.jpg",
        "cost": "4801.29",
        "short_description": "The Innovators",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    },
    {
        "id": "8",
        "image": "/product_img/uncanny valley.jpg",
        "cost": "4801.29",
        "short_description": "Uncanny Valley",
        "bullet_description": [
            "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
            "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
            "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
            "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
        ]
    }
]

// Setup function to render our ProductCatalog on the homepage
const setup = function() {
    ReactDOM.render(<ProductCatalog products={products}></ProductCatalog>, document.getElementById('product-catalog'));
}

// Call our setup function
setup();