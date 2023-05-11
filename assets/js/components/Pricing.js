import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
    transition: 'transform 0.3s',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  abonnementdebase: {
    backgroundColor: '#4caf50',
    color: 'white',
  },
  abonnementpro: {
    backgroundColor: '#2196f3',
    color: 'white',
  },
  abonnementpremium: {
    backgroundColor: '#f44336',
    color: 'white',
  },
});

const Pricing = () => {
    const classes = useStyles();
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
              <div key={index} className="col-12 col-sm-6 col-md-4">
                <Card className={`${classes.root} ${classes[plan.title.toLowerCase().replace(/ /g, '').trim()]}`}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {plan.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {plan.price}
                    </Typography>
                    <List>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx}>
                          {feature}
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions>
                    <Button size="small">S'abonner</Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Pricing;