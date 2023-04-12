import React from 'react';

const Pricing = () => {
    const plans = [
        {
            title: 'Abonnement de base',
            price: '19.99€',
            features: ['Accès illimité  à la salle de sport et aux équipements', 'Support par e-mail ou chat', 'Possibilité de réserver des séances de coaching (payées séparément)'],
        },
        {
            title: 'Abonnement Pro',
            price: '29.99€',
            features: ['Tout dans le plan de base', 'Accès prioritaire aux créneaux de coaching', 'Quelques séances de coaching incluses chaque mois (par exemple, 2 séances)','Support premium (réponse rapide)'],
        },
        {
            title: 'Abonnement Premium',
            price: '49.99€',
            features: ['Tout dans le plan Pro', 'Séances de coaching illimitées', 'Analyse de la performance et suivi personnalisé','Accès prioritaire aux événements spéciaux et promotions'],
        },
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Nos offres d'abonnement</h2>
            <div className="row">
                {plans.map((plan, index) => (
                    <div key={index} className="col-md-4">
                        <div
                            className={`card pricing-card mb-4 ${plan.title
                                .toLowerCase()
                                .replace(/ /g, '-')}`}
                        >
                            <div className="card-header">{plan.title}</div>
                            <div className="card-body">
                                <h3 className="card-title">{plan.price}</h3>
                                <ul className="list-group list-group-flush">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="list-group-item">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-outline-light">S'abonner</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Pricing;