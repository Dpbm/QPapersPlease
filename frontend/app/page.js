'use client';

import styles from './home.module.css';
import icon from '../public/icon.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { BlockMath } from 'react-katex';

export default function Home() {
	const circuitURL = `${
		process.env.NEXT_PUBLIC_API_URL
	}static/circuit.png?${Date.now()}`;

	const [bribe, setBribe] = useState(0);
	const [wanted, setWanted] = useState(0);
	const [documents, setDocuments] = useState(0);
	const [falseInfo, setFalseInfo] = useState(0);
	const [passport, setPassport] = useState(0);
	const [circuitState, setCircuitState] = useState({
		accept: '0',
		detain: '0',
		justify: '1',
	});
  const [latexData, setLatexData] = useState('');

	const [loading, setLoading] = useState(false);

	async function loadState() {
		try {
			setLoading(true);
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}create-circuit`,
				{
					bribe,
					wanted,
					other_documents: documents,
					false_info: falseInfo,
					passport,
				}
			);
			setCircuitState({detain:data.detain,accept:data.accept, justify:data.justify});
      setLatexData(data.latex);
			setLoading(false);
		} catch (error) {
			console.error(
				"wasn't possible to get the circuit state. Please, mare sure the backend is up and running!"
			);
			console.error(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		loadState();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bribe, wanted, documents, falseInfo, passport]);

	return (
		<main className={styles.page}>
			<div className={styles.card}>
				<header>
					<Image
						src={icon}
						background='#100e0c'
						alt='papers please icon'
					/>
				</header>

				<section className={styles.sectionContainer}>
					<h1 className={styles.sectionTitle}>Input Data</h1>
					<ul className={styles.inputs}>
						<li>
							<label for='bribe' className={styles.inputText}>
								Bribe
							</label>
							<input
								type='checkbox'
								name='bribe'
								checked={bribe}
								onChange={(e) =>
									setBribe(Number(e.target.checked))
								}
							/>
						</li>
						<li>
							<label
								for='false_info'
								className={styles.inputText}
							>
								False Info
							</label>
							<input
								type='checkbox'
								name='false_info'
								checked={falseInfo}
								onChange={(e) =>
									setFalseInfo(Number(e.target.checked))
								}
							/>
						</li>
						<li>
							<label for='wanted' className={styles.inputText}>
								Wanted
							</label>
							<input
								type='checkbox'
								name='wanted'
								checked={wanted}
								onChange={(e) =>
									setWanted(Number(e.target.checked))
								}
							/>
						</li>
						<li>
							<label for='passport' className={styles.inputText}>
								Passport
							</label>
							<input
								type='checkbox'
								name='passport'
								checked={passport}
								onChange={(e) =>
									setPassport(Number(e.target.checked))
								}
							/>
						</li>
						<li>
							<label for='documents' className={styles.inputText}>
								Documents
							</label>
							<input
								type='checkbox'
								name='documents'
								checked={documents}
								onChange={(e) =>
									setDocuments(Number(e.target.checked))
								}
							/>
						</li>
					</ul>
				</section>

				{loading ? (
					<div className={styles.loadingContainer}>
						<ReactLoading type='spin' color='#cc2e2e' />
					</div>
				) : (
					<>
						<section className={styles.sectionContainer}>
							<h1 className={styles.sectionTitle}>State</h1>
							<ul className={styles.state}>
								<li className={styles.stateBit}>
									accept: {circuitState['accept']}
								</li>
								<li className={styles.stateBit}>
									detain: {circuitState['detain']}
								</li>
								<li className={styles.stateBit}>
									justify: {circuitState['justify']}
								</li>
							</ul>
						</section>

						<section className={styles.sectionContainer}>
              <BlockMath>{latexData}</BlockMath>
							<img
								src={circuitURL}
								alt='circuit image'
								className={styles.circuitImage}
								title='resulting circuit'
								loading='lazy'
							/>
						</section>
					</>
				)}
			</div>
		</main>
	);
}
