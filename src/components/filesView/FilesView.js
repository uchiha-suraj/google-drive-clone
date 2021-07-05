import React, { useEffect, useState } from 'react';
import '../../styles/FilesView.css';

import FileItem from './FileItem';
import FileCard from './FileCard';

import { db } from '../../firebase';

const FilesView = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    return (
        <div className = "fileView">
            <div className = "fileView__row">
                {/* file cards  */}
                {
                    files.slice(0, 5).map(({ id, item }) => (
                        <FileCard name = {item.caption} />
                    ))
                }
            </div>
            <div className = "fileView__titles">
                <div className = "fileView__titles--left">
                    <p>Name</p>
                </div>
                <div className = "fileView__titles--right">
                    <p>Last modified</p>
                    <p>Files size</p>
                </div>
            </div>
            {/* file items  */}
            {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                ))
            }
        </div>
    )
}

export default FilesView;
