import { ExternalLinkIcon, LinkIcon, ViewIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Flex, IconButton, Link, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "./SupaBaseConnectionAPI";

export function CardAtividadeButtons(props: {arte: string | null}) {
    const [publicUrl, setPublicUrl] = useState<string>();
    
    const [downloadUrl, setdownloadUrl] = useState<string>();
    
    useEffect(() => {
        const {data} = supabase.storage.from("artes").getPublicUrl("" + props.arte);
        setPublicUrl(data.publicUrl);
    },[])
    
    async function getDownloadUrl(){
       await supabase.storage.from("artes").download("" + props.arte);
    }

    return (
        <Flex flex='1' justifyContent={'end'}>            
            <Link href={publicUrl} isExternal>
                <IconButton icon={<ViewIcon />} variant={'ghost'} aria-label='Visualiar folheto' colorScheme='blue'></IconButton>            
            </Link>
            <IconButton onClick={getDownloadUrl} icon={<ExternalLinkIcon />} variant={'ghost'} aria-label='Compartilhar' colorScheme='blue'></IconButton>
        </Flex>
    )
}