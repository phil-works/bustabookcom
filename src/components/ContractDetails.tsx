import React from 'react';
import { ButtonGroup, Button} from 'reactstrap';

function ContractDetails(props) {

        var algo_link = "https://algoexplorer.io/application/" + props["app_id"]

        return (
            <>
            <ButtonGroup>
                <Button size="lg" outline color="secondary">
                    Contract ID: {props["app_id"]}
                </Button>
                <Button size="lg" outline disabled color="secondary">
                    Github Link
                </Button>
                <Button size="lg" outline color="secondary" href={algo_link}>
                    View on AlgoExplorer
                </Button>
            </ButtonGroup>
            </>            
        )

}

export default ContractDetails;