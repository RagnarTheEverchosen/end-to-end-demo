import { ComplexForm } from '@/components/complex-form';
import { ProfileForm } from '@/components/profile-form';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
	return (
		<>
			<div className='container my-10'>
				<div className='flex flex-col gap-10'>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>Text</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='flex flex-col gap-1'>
									<h1 className='font-bold text-xl text-blue-500'>
										Lorem Ipsum
									</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Massa sed elementum tempus
										egestas sed sed risus pretium. Faucibus
										a pellentesque sit amet porttitor eget.
										Posuere lorem ipsum dolor sit amet.
										Nulla pharetra diam sit amet nisl
										suscipit adipiscing bibendum. Ipsum nunc
										aliquet bibendum enim facilisis gravida
										neque convallis a. Pellentesque massa
										placerat duis ultricies. Quis viverra
										nibh cras pulvinar mattis nunc sed.
										Aenean sed adipiscing diam donec
										adipiscing tristique risus nec.{' '}
										<span className='text-orange-500 italic'>
											Malesuada
										</span>{' '}
										bibendum arcu vitae elementum curabitur
										vitae nunc sed velit.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>Accordion</CardTitle>
							</CardHeader>
							<CardContent>
								<Accordion type='single' collapsible>
									<AccordionItem value='item-1'>
										<AccordionTrigger>
											What is Lorem Ipsum?
										</AccordionTrigger>
										<AccordionContent>
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Lorem Ipsum has been the
											industry's standard dummy text ever
											since the 1500s, when an unknown
											printer took a galley of type and
											scrambled it to make a type specimen
											book. It has survived not only five
											centuries, but also the leap into
											electronic typesetting, remaining
											essentially unchanged. It was
											popularised in the 1960s with the
											release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
								<Accordion type='single' collapsible>
									<AccordionItem value='item-2'>
										<AccordionTrigger>
											Why do we use it?
										</AccordionTrigger>
										<AccordionContent>
											It is a long established fact that a
											reader will be distracted by the
											readable content of a page when
											looking at its layout. The point of
											using Lorem Ipsum is that it has a
											more-or-less normal distribution of
											letters, as opposed to using
											'Content here, content here', making
											it look like readable English. Many
											desktop publishing packages and web
											page editors now use Lorem Ipsum as
											their default model text, and a
											search for 'lorem ipsum' will
											uncover many web sites still in
											their infancy. Various versions have
											evolved over the years, sometimes by
											accident, sometimes on purpose
											(injected humour and the like).
										</AccordionContent>
									</AccordionItem>
								</Accordion>
								<Accordion type='single' collapsible>
									<AccordionItem value='item-3'>
										<AccordionTrigger>
											Where does it come from?
										</AccordionTrigger>
										<AccordionContent>
											Contrary to popular belief, Lorem
											Ipsum is not simply random text. It
											has roots in a piece of classical
											Latin literature from 45 BC, making
											it over 2000 years old. Richard
											McClintock, a Latin professor at
											Hampden-Sydney College in Virginia,
											looked up one of the more obscure
											Latin words, consectetur, from a
											Lorem Ipsum passage, and going
											through the cites of the word in
											classical literature, discovered the
											undoubtable source. Lorem Ipsum
											comes from sections 1.10.32 and
											1.10.33 of "de Finibus Bonorum et
											Malorum" (The Extremes of Good and
											Evil) by Cicero, written in 45 BC.
											This book is a treatise on the
											theory of ethics, very popular
											during the Renaissance. The first
											line of Lorem Ipsum, "Lorem ipsum
											dolor sit amet..", comes from a line
											in section 1.10.32.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</CardContent>
						</Card>
					</div>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>Forms</CardTitle>
							</CardHeader>
							<CardContent className='flex flex-col gap-4'>
								<div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5'>
									<ProfileForm />
								</div>
								<div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5'>
									<ComplexForm />
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
