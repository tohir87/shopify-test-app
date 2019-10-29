import { Card, Layout, Page} from '@shopify/polaris';

class AnnotetedLayout extends React.Component {
	state = {};

	render() {
		return (
			<Page>
				<Layout>
					<Layout.AnnotatedSection 
						title="Default Discount"
						description="Add a product to sample App, it will automatically be discounted"
					>
						<Card sectioned>
							<div>Card</div>
						</Card>

					</Layout.AnnotatedSection>
				</Layout>
			</Page>
		);
	}
}

export default AnnotetedLayout;