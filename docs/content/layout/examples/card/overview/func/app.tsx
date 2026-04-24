import * as React from 'react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardBody,
	CardActions,
	CardImage,
	CardSubtitle,
	Avatar
} from '@progress/kendo-react-layout';
import { commentIcon, heartIcon, heartOutlineIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { ScrollView } from '@progress/kendo-react-scrollview';

const cardsData = [
	{
		thumbnailSrc: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/bg_flag.jpg',
		headerTitle: 'bg_traditions',
		headerSubtitle: 'Bulgaria, Europe',
		commentsExpanded: false,
		postLiked: false,
		comments: [],
		newCommentTextValue: '',
		postLikes: 174,
		scrollViewItems: [
			{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/rose_festival.jpg' },
			{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/kukeri.jpg' },
			{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/martenitsa.jpg' }
		]
	},
	{
		thumbnailSrc: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/rila_lakes.jpg',
		headerTitle: 'bg_mountains',
		headerSubtitle: 'Bulgaria, Europe',
		commentsExpanded: false,
		postLiked: false,
		comments: [],
		newCommentTextValue: '',
		postLikes: 962,
		scrollViewItems: [
			{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/rila.jpg' },
			{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/pamporovo.jpg' },
			{ url: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/camping.jpg' }
		]
	}
];

const App = () => {
	const [cards, setCards] = React.useState(cardsData);

	const postLikesCount = (card) => {
		let index = cards.findIndex((item) => item.thumbnailSrc === card.thumbnailSrc);
		let newCards = [...cards];
		newCards[index].postLiked = !newCards[index].postLiked;
		setCards(newCards);
	};

	const commentClick = (card) => {
		let index = cards.findIndex((item) => item.thumbnailSrc === card.thumbnailSrc);
		let newCards = [...cards];
		newCards[index].commentsExpanded = !newCards[index].commentsExpanded;
		setCards(newCards);
	};

	const postComment = (card) => {
		let index = cards.findIndex((item) => item.thumbnailSrc === card.thumbnailSrc);
		let newCards: Array<any> = [...cards];
		let textArea: any = document.querySelector('.k-textarea');
		newCards[index].comments.push({
			likes: 0,
			text: textArea.value
		});
		textArea.value = '';
		setCards(newCards);
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-evenly',
				flexWrap: 'wrap'
			}}
		>
			{cards.map((card, index) => {
				return (
					<div key={index}>
						<Card
							style={{
								width: 260,
								boxShadow: '0 0 4px 0 rgba(0, 0, 0, .1)',
								marginTop: '15px'
							}}
						>
							<CardHeader className="k-hbox" style={{ background: 'transparent' }}>
								<Avatar type="image" size="medium" rounded={'full'}>
									<img
										style={{ width: 45, height: 45 }}
										alt="KendoReact Card Thumbnail"
										src={card.thumbnailSrc}
									/>
								</Avatar>
								<div>
									<CardTitle style={{ marginBottom: '4px' }}>{card.headerTitle}</CardTitle>
									<CardSubtitle>
										<p>{card.headerSubtitle}</p>
									</CardSubtitle>
								</div>
							</CardHeader>
							<ScrollView style={{ height: '170px', maxWidth: '100%' }}>
								{card.scrollViewItems.map((item, index) => {
									return <CardImage src={item.url}></CardImage>;
								})}
							</ScrollView>
							<CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
								<div>
									<Button
										type="button"
										fillMode="flat"
										onClick={() => postLikesCount(card)}
										svgIcon={card.postLiked ? heartIcon : heartOutlineIcon}
									/>
									<Button
										type="button"
										fillMode="flat"
										onClick={() => commentClick(card)}
										svgIcon={commentIcon}
									/>
								</div>
								<span
									style={{
										fontSize: '13px',
										alignSelf: 'center',
										color: '#656565'
									}}
								>
									{card.postLikes} likes
								</span>
							</CardActions>
							{card.commentsExpanded && (
								<CardBody>
									<div>
										<div style={{ marginBottom: '8px', padding: '0 16px' }}>
											{card.comments.map((comment: any, index) => {
												return (
													<div
														style={{
															display: 'flex',
															justifyContent: 'space-between'
														}}
														key={index}
													>
														<div
															style={{
																padding: '4px 0',
																alignItems: 'center',
																display: 'flex'
															}}
														>
															<Avatar
																type="initials"
																rounded={'full'}
																style={{ color: 'white' }}
																size="small"
															>
																<span>SS</span>
															</Avatar>
															<div
																style={{
																	display: 'flex',
																	flexDirection: 'column'
																}}
															>
																<span
																	style={{
																		fontSize: '13px',
																		fontWeight: 'bold',
																		maxWidth: '100px',
																		wordBreak: 'break-all'
																	}}
																>
																	{comment.text}
																</span>
																<span className="time">
																	1s ago
																	<span style={{ marginLeft: '8px' }}>
																		{comment.likes} like
																	</span>
																</span>
															</div>
														</div>
														<Button
															type="button"
															fillMode="flat"
															svgIcon={comment.likes > 0 ? heartIcon : heartOutlineIcon}
														/>
													</div>
												);
											})}
										</div>
									</div>
									<div className="k-hbox" style={{ padding: '16px 16px 0' }}>
										<textarea
											className="k-textarea"
											placeholder="Comment..."
											style={{
												resize: 'none',
												borderRadius: 10,
												padding: 5,
												fontSize: 10
											}}
										/>
										<Button
											style={{ marginLeft: 10, borderRadius: 10 }}
											onClick={() => postComment(card)}
											themeColor={'primary'}
											fillMode="flat"
											type="button"
										>
											Post
										</Button>
									</div>
								</CardBody>
							)}
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default App;
